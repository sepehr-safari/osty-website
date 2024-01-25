import { formatRelative } from 'date-fns';

import { Card, CardContent } from '@/shared/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { Skeleton } from '@/shared/components/ui/skeleton';

import { useLatestNotesDemo } from './hooks';

export const LatestNotesDemo = () => {
  const { events } = useLatestNotesDemo();

  return (
    <div className="w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-4xl">
      {events.length == 0 &&
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="hover:border-muted-foreground transition-colors duration-200 hover:bg-secondary hover:cursor-pointer"
          >
            <Skeleton className="h-28 rounded-lg" />
          </div>
        ))}

      {events.map((event) => (
        <Dialog key={event.id}>
          <DialogTrigger asChild>
            <Card
              key={event.id}
              className="hover:border-muted-foreground transition-colors duration-200 hover:bg-secondary hover:cursor-pointer"
            >
              <CardContent className="mt-6">
                <p className="text-lg font-semibold">{event.author.profile?.name}</p>

                <p className="text-sm text-muted-foreground truncate">{event.content}</p>

                {event.created_at && (
                  <p className="text-right text-sm text-gray-500">
                    {formatRelative(new Date(event.created_at * 1000), new Date())}
                  </p>
                )}
              </CardContent>
            </Card>
          </DialogTrigger>

          <DialogContent className="md:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{event.author.profile?.name}</DialogTitle>
              <DialogDescription>
                <p>{event.author.profile?.website || event.author.profile?.nip05}</p>
                <p>{event.author.profile?.bio}</p>
              </DialogDescription>
            </DialogHeader>

            <p className="leading-7 [overflow-wrap:anywhere]">{event.content}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
