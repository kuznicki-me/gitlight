#LightTable GIT integration plugin
=================================
### Project tasks at: [trello board](https://trello.com/b/kg27zMc3/lighttable-gitlight)

Thanks for visiting.  This is a git interface plugin for Light Table.  It might
be buggy and unfinished, but it can do some things.

It requires git installed.


#Configuration
Put this configuration into your user behaviour file.

If git command is on your PATH, the following user behaviour should (hopefully) work.

    [:app :lt.plugins.gitlight/config {:git-binary "git"
                                       :max-history 64}]

Which means that we shall try to run process "git", and we will try to remember
64 last git commands and their outputs.

We advise to add some shortcuts in your user keymap, for instance this one
toggles gitlight status:

    [:editor "alt-shift-s" :gitlight-status-toggle]

You can also turn some unwanted behaviors off, like so:

    [:git-status-out :-lt.plugins.gitlight.status.back/git-status-out-failure-verbose]

#fail

Now, if gitlight does not work for You, please try one of the following:

Location, location, location
----------------------------
You might have git binary in a different location.
On Linux and Mac try:

    $ whereis git
    and/or
    $ which git

And then set Your configuration to whatever it returns (for example
"/usr/bin/git") like so:

    [:app :lt.plugins.gitlight/config {:git-binary "/usr/bin/git"
                                       :max-history 64}]

on Windows remember about doubling the \, so when you are (for example) using
GitHub, binary files are usually located in place like:

    C:\\Users\\<username>\\AppData\\Local\\GitHub\\PortableGit_<numbersandletters>\\bin\\git.exe

The location string is quoted (though not escaped) before use, so spaces in the
string should not be a problem.


Git version problems
--------------------

Gitlight is tested with git 1.8.5.5, so at the very least that version should
work.  It might not, but I definitely advise using something >=1.8.  It is
known (thanks mortalapeman) not to work very well with version 1.7.9.5.


Windows and Mac
---------------

Gitlight is written on Linux and tested on Linux.  Though there is no
Linux-specific code, some things might Just Not Work.  Please post an issue
about it, though do not expect miracles.


Bugs!
-----

So, You got a bug.  Please post details of Your Light Table version, git
version, gitlight version, operating system and a description, if possible, of
the bug.  The description might include, for instance, a bash script to create
the problem-generating repo.
