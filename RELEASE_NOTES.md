version 0.0.9
=============

New Features:
 * Garbage day!  Clean out useless and pointless stuff, change around lots of
   code.  Probably not as visible as adding something new, but still very
   satisfying to clean up the atrocities I had commited earlier.  Hopefully
   more to come.
 * Stashing!  Stash, apply, pop&drop, diff&branch.  No custom message, though.
 * Log, although only a simple one first.  Though there is a fun little button
   to diff your current repo with the logged version, so be sure to check it
   out.


version 0.0.8
=============

New Features:
 * This gitlight release has been sponsored by generous code donations from
   @seancaffery.  Thanks!
 * See remote branches.  Not much to do with them yet, but doing just this
   required synchornizing git commands.  What remains is to script some buttons
   in and suchlike.  Maybe next time.

Bugfixes:
 * Gutter width should not be interacting badly with other plugins that use it.
 * Proper whitespace parsing with git commands.


version 0.0.7
=============

New Features:
 * Git command history!  Every ignored output is now remembered, and You can
   see what failed, what succeeded and how!  You can also dump it into the
   console, and change the  the max-history limit (by default 64), if that's
   Your thing.
   On some strange error, You can also dump it to a file, save it and pester us
   with it until we fix a bug!
 * Nicer colors for inline git diff.

Bugfixes:
 * inline diff should no longer fail on files with spaces in names.


version 0.0.6
=============
New Features:
 * Do the cached diff to view what changes will go to Your next commit, and
   then use a nice form to write Your message.
 * The commit messages *should* be sanitized.  That means that entering a
   'fixed "rm somethingimportant"' in the message should no longer cause havoc.
   I wouldn't trust it too much though, I might have missed something that
   needs to be escaped.  Stick to alphanumerics and nobody gets hurt.
 * Inline information about git diff line state.  Very experimental, but toggle
   it and take it for a spin.  By default it should even update on save (though
   You can disable this).  Magic made possible with code stolen from
   https://github.com/bfabry/gblame/
 * Manual refresh button.  For those special moments that happen all the time
   when the UI does not refresh properly.

Changes:
 * Popup about not being in git repo?  What popup?  I deny that we've ever had
   such an unwieldy thing.
 * Buttons moved around in the git status.  Some things got renamed.  Most
   probably they shall move and change again.  And again.  UI is such a fickle
   thing.
 * After using some more code from devs, the input field in the quick commit
   popup works as it should now.  Arrows properly move the cursor instead of
   the selected button.  Use TAB to move it now.

Known Issues:
 * The inline diff might make Your LightTable very unresponsive.  It might be
   the editors fault or my awful spaghetti code.


version 0.0.5
=============
New Features:
 * Checkout file changes.  Now losing changes is just a click away!  Try it
   now on Your unstaged and important work.
 * Shinier buttons in status!  Add Your own colors, or css them out if they
   make You vomit.
 * Filenames in status are now buttons.  Click to open the file.  Surprisingly
   handy.

Changes:
 * Dumping proc/exec in favor of exec from child_process.  Better errors, can
   handle larger files (previous version sometimes choked on diffs larger than
   4096 chars), although it might cause some problems with special characters
   that need escaping.  Report such problems, will think how to fix them.
 * No more auto refresh on a timer.  Instead, we have new and exciting watch on
   pool/pool and behavior on save.  Clicking on buttons has never been this
   responsive.

Known Issues:
 * There are some things that might not refresh the status window.  A common
   problem: diff files, check what goes into the commit, stage, commit, git
   success!  and yet the files remain staged.  Most probably, they are already
   commited, it's just that the status has not been refreshed.
 * Quote marks in commit messages... I really need to sanitize all inputs, but
   for now... just don't.


version 0.0.4
=============
New Features:
 * Do the "diff" to delightfully detect disparities in data.  Difficult?
   Definitely doubtful!



version 0.0.3
=============
New Features:
 * Simple branch management -- merge, push, checkout and create new ones.  In
   color!

Changes:
 * Commented out unused (yet!) buttons.  They will be back when we implement
   them.
 * Common UI elements got their own file.  Want to annoy users with input
   popups?  There's a standard way to do it, now!

Known Issues:
 * The branches window does not refresh with commits made by status sidebar.
   It refreshes itself on its own button clicks, or reruning the command.  It
   is a bit inconsistent with the auto-refresh of status sidebar.



version 0.0.2
=============

Fixes:
 * Hide/not open status on file not in git repo.  Thanks jsyrjala!
 * Fix pathing (tested on Linux and Windows, should work on MacOS).

New Features:
 * Basic self tests.  Run them if the plugin does not work, maybe it will tell
   us something we can use?  (Spoiler:  probably not)
   Note:  they should work on Linux and maybe Mac, but most probably not on
   Windows.
 * Git add, git reset and rm untracked are here!  Probably buggy, so use at own
   discretion.  Click the stage, unstage, add, resolve or delete buttons in the
   git status UI and witness git magic.
 * Very simple git commit.  Probably best not to use on important repos.
   Look and feel are definitely not final and are subject to change.
 * Simplest possible git push, pull and fetch.
 * Newer, more exciting and harder to debug bugs!

Changes:
 * We changed the way git is called that should (in theory) provide easier
   extensibility of the plugin with new commands.

Known Issues:
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
 * Using gitlight at the moment is quite a click-a-thon, and we do not really
   love that.  We shall try to implement some sort of keyboard controlling
   scheme, if time, wits and abilities permit.



version 0.0.1
=============
 * UI for status.
 * Git status.
