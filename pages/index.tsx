import Dashboard from '../components/Dashboard';
import SubmittersList from '../components/SubmittersList';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Dashboard />
      <SubmittersList />
    </div>
  );
}