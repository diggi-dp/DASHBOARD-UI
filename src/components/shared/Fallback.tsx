import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

type FallbackProps = {
  error: any;
};

const ErrorFallback = ({ error }: FallbackProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-red-500" role="alert">
      <h2 className="text-2xl font-semibold">Ooops, something went wrong :( )</h2>
      <pre className="text-2xl font-bold">{error.message}</pre>
      <pre>{error.stack}</pre>
      <Button variant="outline" className="mt-4" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default ErrorFallback;
