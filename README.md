DEBOUNCE : Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is not called repeatedly within a short period.
USAGE :
- Search Input Suggestions: When a user types in a search box, a debounce can delay API calls for suggestions. 
- Window Resize Events: During a window resize, the resize event may fire continuously, potentially causing performance issues if it triggers expensive operations like layout recalculations.
- Form Validation on User Input: In forms, as users type into fields, real-time validation can be useful. However, running validation on every keystroke can be overkill. Debouncing the validation function helps ensure it only runs when the user pauses typing, improving both performance and UX.



Throttle : Throttling is a technique used to control the frequency of function execution, allowing it to run only once every specified interval, no matter how many times it is triggered during that interval. Unlike debouncing, which delays execution until the activity stops, throttling executes the function at regular intervals, making it ideal for scenarios where periodic execution is desired, even if events continue to fire.
USAGE : 
- Scroll Events: Scroll events can fire many times per second as a user scrolls down a page. Without throttling, handling each scroll event could lead to significant performance issues, especially if the handler performs complex calculations or manipulates the DOM. Throttling the scroll event handler ensures it only fires at defined intervals, reducing the load on the browser.
- Window Resize Events: Similar to the scroll event, resize events can trigger many times as the user resizes the window. If the resize handler performs layout adjustments, throttling ensures it only executes periodically, making resizing feel smoother and improving performance.
- Infinite Scrolling with API Requests: In an infinite scrolling setup, where more content loads as the user scrolls near the bottom, throttling the content-fetching function can help avoid multiple API requests being sent in quick succession, optimizing server load and response handling.