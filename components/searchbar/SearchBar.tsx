import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';



interface Props {
  onSubmit(value: string): void;
  style?: React.CSSProperties;
  isFocus?: boolean;
}

export default function SearchBar({ onSubmit, style, isFocus }: Props) {
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) {
      if (searchRef.current) searchRef.current.focus();
    }
  }, [isFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim().length) return;
    onSubmit(searchText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <form className="flex items-center w-[434px] h-[46px] px-6 rounded-2xl border border-muted/30 bg-background-light" onSubmit={handleSubmit} role="search">
        {/* Search Icon */}
        <FiSearch className="text-muted text-xl mr-3" size={20} />

        <input
          ref={searchRef}
          type="text"
          className="w-full bg-transparent text-[16px] text-foreground placeholder:text-muted/60 focus:outline-none"
          placeholder="Search for offers"
          onChange={handleChange}
          value={searchText}
        />
      </form>
    </>
  );
};

