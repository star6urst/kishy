import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  initialKishys,
  initialEvents,
  initialSubmissions,
  initialCommunityMessages,
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
  const [communityMessages, setCommunityMessages] = useState(
    initialCommunityMessages
  );

  const addSubmission = ({ title, body, author, visibility }) => {
    const newSubmission = {
      id: makeId('sub'),
      title,
      body,
      author: author || 'You',
      visibility,
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
    return newSubmission;
  };

  const addEventComment = (eventId, { author, body }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              comments: [
                ...event.comments,
                { id: makeId('c'), author: author || 'You', body },
              ],
            }
          : event
      )
    );
  };

  const addCommunityMessage = ({ author, body }) => {
    setCommunityMessages((prev) => [
      ...prev,
      { id: makeId('m'), author: author || 'You', body },
    ]);
  };

  const value = useMemo(
    () => ({
      kishys,
      events,
      submissions,
      communityMessages,
      addSubmission,
      addEventComment,
      addCommunityMessage,
    }),
    [kishys, events, submissions, communityMessages]
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
