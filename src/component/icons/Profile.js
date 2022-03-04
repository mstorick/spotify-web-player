import * as React from "react";

function SvgProfile(props) {
  return (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="user-icon"
    {...props}
  >
    <path d="M15.216 13.717L12 11.869a.492.492 0 01-.243-.348.496.496 0 01.112-.41l1.311-1.537A5.498 5.498 0 0014.5 6v-.5a5.524 5.524 0 00-1.739-4.014A5.46 5.46 0 008.636.011c-2.88.187-5.135 2.673-5.135 5.66V6c0 1.311.469 2.58 1.319 3.574l1.311 1.537a.49.49 0 01.112.41.49.49 0 01-.244.348l-3.213 1.847A5.513 5.513 0 000 18.501V20h1v-1.499c0-1.616.874-3.116 2.283-3.917l3.215-1.848c.388-.223.654-.604.73-1.045a1.494 1.494 0 00-.337-1.229L5.579 8.925A4.505 4.505 0 014.499 6v-.329c0-2.461 1.845-4.509 4.2-4.662a4.468 4.468 0 013.377 1.206A4.461 4.461 0 0113.5 5.5V6a4.5 4.5 0 01-1.08 2.925l-1.311 1.537a1.499 1.499 0 00.394 2.274l3.218 1.849a4.513 4.513 0 012.28 3.916V20h1v-1.499a5.517 5.517 0 00-2.785-4.784z" />
  </svg>
  );
}

export default SvgProfile;
