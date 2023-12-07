const ThemeToggle = () => {
  return (
    <>
      🌞
      <div class="inline-block w-10 m-1">
        <span data-toggle-theme="dark" data-act-class="pl-4" class="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
          <span class="rounded-full w-3 h-3 m-1 bg-green-700">
          </span>
        </span>
      </div>
      🌚
    </>
  );
};
export default ThemeToggle;
