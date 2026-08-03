import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { getRandomQuestionPath } from '../data/daily';

export default function RandomPage() {
  const path = useMemo(() => getRandomQuestionPath(), []);
  return <Navigate to={path} replace />;
}
