import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  initialKishys,
  initialEvents,
  initialSubmissions,
} from '../data/mockData';

// In-memory only. Nothing here persists between app launches yet ---
// this is standing in for a real backend until one exists. See README.

const AppDataContext = createContext(null);

let nextId = 1000;
function makeId(prefix) {
  nextId += 1;
  return `${prefix}-${nextId}`;
}

export function AppDataProvider({ children }) {
  const [kishys] = useState(initialKishys);
  const [events, setEvents] = useState(initialEvents);
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [displayName, setDisplayName] = useState('You');
  const [savedKishyIds, setSavedKishyIds] = useState([]);

  const addSubmission = ({ title, body, visibility }) => {
    const newSubmission = {
      id: makeId('sub'),
      title,
      body,
      author: displayName,
      visibility,
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
    return newSubmission;
  };

  const addEventComment = (eventId, { body }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              comments: [
                ...event.comments,
                { id: makeId('c'), author: displayName, body },
              ],
            }
          : event
      )
    );
  };

  const toggleSavedKishy = (kishyId) => {
    setSavedKishyIds((prev) =>
      prev.includes(kishyId)
        ? prev.filter((id) => id !== kishyId)
        : [...prev, kishyId]
    );
  };

  const value = useMemo(
    () => ({
      kishys,
      events,
      submissions,
      displayName,
      savedKishyIds,
      setDisplayName,
      addSubmission,
      addEventComment,
      toggleSavedKishy,
    }),
    [kishys, events, submissions, displayName, savedKishyIds]
  );

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
}