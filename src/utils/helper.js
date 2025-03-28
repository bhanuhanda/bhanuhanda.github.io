// Utility to create dynamic url for static asset imports
export const getImageURL = (name) => {
    return new URL(`../assets/${name}`, import.meta.url);
};

// Utility to join class names
export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
