import { NDKSubscriptionCacheUsage } from '@nostr-dev-kit/ndk';
import { useEffect } from 'react';

import { useSubscribe } from '@/shared/hooks/nostr';

export const useLatestNotesDemo = () => {
  const { subscribe, status, events } = useSubscribe();

  useEffect(() => {
    if (status !== 'idle') return;

    subscribe(
      [
        {
          authors: [
            '3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d', // fiatjaf
          ],
          kinds: [1],
          limit: 2,
        },
        {
          authors: [
            'fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52', // publo
          ],
          kinds: [1],
          limit: 2,
        },
        {
          authors: [
            '1bc70a0148b3f316da33fe3c89f23e3e71ac4ff998027ec712b905cd24f6a411', // karnage
          ],
          kinds: [1],
          limit: 2,
        },
      ],
      { cacheUsage: NDKSubscriptionCacheUsage.ONLY_RELAY, fetchProfile: true },
    );
  }, [status, subscribe]);

  return { events };
};
