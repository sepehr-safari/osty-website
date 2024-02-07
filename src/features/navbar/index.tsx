import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { ModeToggle } from '@/shared/components/mode-toggle';
import { Button } from '@/shared/components/ui/button';

export const Navbar = () => {
  return (
    <>
      <div className="w-full bg-black/10 backdrop-blur-lg z-10 sticky top-0">
        <div className="px-4 py-2 flex items-center gap-2 ">
          <a href="/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <img src="/osty.png" className="w-8 h-8" />

            <p className="text-xl font-bold">Osty</p>
          </a>

          <div className="ml-auto flex gap-2">
            <Button variant="link" size="icon" asChild className="ml-8">
              <a href="https://github.com/ostyjs/create-osty" target="_blank" rel="noreferrer">
                <GitHubLogoIcon />
              </a>
            </Button>

            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
