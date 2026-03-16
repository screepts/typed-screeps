interface Console {
    /**
     * Prints a message to the console.
     *
     * If {@link console.logUnsafe} is defined then this function will escape HTML in {@link args},
     * so that they will be displayed as plain text in the client console, rather than being evaluated as HTML.
     *
     * If you still wish to inject raw HTML into the client console, use {@link console.logUnsafe} instead.
     * @param args arguments to print.
     */
    log(...args: any[]): void;
    /**
     * An alternative to {@link console.log} that doesn't perform safe-HTML escapes.
     * This can be used to output messages to the client that will be parsed as raw HTML, allowing some sort of
     * injection attack. As such, it's unsafe to pass it things you have do not have control over, like player creep
     * names, signs, market transaction messages.
     *
     * In versions of screeps server prior to 4.2.20, this function is not defined and {@link console.log} do not escape HTML entities.
     * @param args arguments to print without escaping HTML entities.
     */
    logUnsafe?(...args: any[]): void;
}

declare var console: Console;
