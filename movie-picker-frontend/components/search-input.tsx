function SearchInput() {
  return (
    <form className="group relative">
      <svg width="20" height="20" fill="currentColor" className="absolute left-2 top-1/2 -mt-2.5 text-grey-dark pointer-events-none" aria-hidden="true">
        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
      </svg>
      <input
      className="
        focus:ring-2
        focus:ring-purple
        focus:outline-none
        appearance-none
        w-full
        text-sm
        leading-6
        text-grey-dark
        placeholder-grey-dark
        rounded-full
        py-1
        pl-10
        ring-1
        ring-grey-dark
        shadow-sm
        easy-linear duration-300"
      type="text"
      aria-label="Find movies & series"
      placeholder="Find movies & series" />
    </form>
  )
}

export default SearchInput
