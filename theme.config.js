// theme.config.js
export default {
    projectLink: 'https://github.com/DreamNetworkCloud/DreamNetwork-Documentation', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/DreamNetworkCloud/DreamNetwork-Documentation/blob/master', // base URL for the docs repository
    titleSuffix: ' – DreamNetwork',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerEditLink: false,
    footerText: `${new Date().getFullYear()} - DreamNetwork`,
    logo: (
        <>
            <svg>...</svg>
            <span className="mr-2 font-extrabold hidden md:inline">DreamNetwork</span>
            <span className="text-gray-600 font-normal hidden md:inline">
                The most powerful Minecraft Network
            </span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="DreamNetwork Documentation - The right way to create your Network." />
            <meta name="og:title" content="DreamNetwork Documentation - The right way to create your Network." />

        </>
    ),
    unstable_faviconGlyph: '👀',
}