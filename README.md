# Tournoodle

**Tournoodle** is a node.js module for generating and managing tournament brackets. The primary goal is to be used in conjunction with [Tron][0] in order to add a Tournament command.

For example, you could instantiate the base class and add the basic information for the tournament, then as people want to join they can be added as a *competitor* which is then able to be flagged as the winner or loser of a game and progress is stored.

I'd also like a way to generate a bracket image instead of just spitting out the list of competitors to `console.log` or the provided `WritableStream`.

[0]: https://github.com/HF-Solutions/Tron