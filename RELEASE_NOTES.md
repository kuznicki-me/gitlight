version 0.0.2

Fixes:
 * Hide/not open status on file not in git repo.  Thanks jsyrjala!
 * Fix pathing (tested on Linux, should work on MacOS, not tested on Windows).

New Features:
 * Basic self tests.  Run them if the plugin does not work, maybe it will tell
   us something we can use?  (Spoiler:  probably not)
   Note:  they should work on Linux and maybe Mac, but most probably not on
   Windows.
 * Git add, git reset and rm untracked are here!  Probably buggy, so use at own
   discretion!  Click the buttons in the git status UI and witness git magic.
 * Very experimental git commit.  Probably best not to use on important repos.
   Look and feel are definitely not final and are subject to change.
 * Newer, more exciting and harder to debug bugs!

Changes:
 * We changed the way git is called that should (in theory) provide easier
   extensibility of the plugin with new commands.

Known Issues (things that just do not work, work properly or in the way we want):
 * Self tests leave some trash in /tmp/.  Not a huge problem, just irritating.
 * Staging does not work on moved or copied files.  We do not yet process moved
   files well enough to support this feature.
 * The git status is using a refresh timer.  While not totally irritating, the
   smarter and probably much more complicated option would be to use some sort
   of asynchronous updating.
   This feature will remain as such until we figure out how make it in a
   smarter way, and support it on different platforms.  Feature, not a bug.
 * That said, resizing of the window to fit the longest line, while a feature,
   can cause some problems.  Try it out Yourselves on some very large paths
   (then move it with git mv for double the fun) then try to resize it
   manually.  Feels like boxing with the UI, and we know about it.  Will fix.
 * Git add, reset and rm untracked do not trigger automatic refreshing of git
   status yet, so You need to wait the refresh interval to see changes made to
   the repo in the UI.  Can feel somewhat sluggish, especially with larger
   intervals and/or larger quantities of files added, reseted and deleted.
 * Merge conflicts.



version 0.0.1
 + UI for status.
 + Git status.
