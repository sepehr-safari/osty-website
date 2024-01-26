import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';

export const Hero = () => {
  const [pm, setPm] = useState('npm');

  return (
    <div className="pb-12 pt-44 flex flex-col gap-6 w-full text-center bg-gradient-to-b from-[#33006e99] to-transparent">
      <img src="/osty.png" className="w-24 h-24 mx-auto " />

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <p>Start building on Nostr</p>
        <p>in seconds with Osty</p>
      </h1>

      <p className="text-xl text-muted-foreground">Fast. Production-Ready. Scalable.</p>

      <div className="mx-auto flex justify-center items-center gap-4 w-full md:max-w-md lg:max-w-lg">
        <code className="relative shrink-0 rounded bg-muted px-[1rem] py-[0.5rem] font-mono text-sm font-semibold">
          {`$ ${pm} create osty${pm == `npm` ? `@latest` : ``}`}
        </code>

        <Select onValueChange={(v) => setPm(v)} defaultValue={pm}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder={pm} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="npm">NPM</SelectItem>
            <SelectItem value="pnpm">PNPM</SelectItem>
            <SelectItem value="yarn">Yarn</SelectItem>
            <SelectItem value="bun">Bun</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button asChild className="">
          <a href="https://github.com/ostyjs/create-osty" target="_blank" rel="noreferrer">
            <GitHubLogoIcon />
            <p className="ml-2">GitHub</p>
          </a>
        </Button>
      </div>
    </div>
  );
};
