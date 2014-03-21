LightTable GIT integration plugin
=================================
### Project tasks at: [trello board](https://trello.com/b/kg27zMc3/lighttable-gitlight)


Configuration
-------------
It's almost certain that You have different git binary location <br>
on Linux and Mac try:

    $ whereis git
    # and/or
    $ which git
    
on Windows, you are using GitHub, binary files are usually located in place like:

    C:\\Users\\<username>\\AppData\\Local\\GitHub\\PortableGit_<numbersandletters>\\bin\\git.exe

Default config:

    {:+ {
        :app [
           (:lt.plugins.gitlight/config {:git-binary "/usr/bin/git"
                                         :git-status-refresh-rate 1000}) ; for cli calls
        ]
    }

You can also add shortcut in your user keymap:

    {:+ {

         :editor {
              "alt-shift-s" [:gitlight-status]
         }

     }}
     
Git versions warning
--------------------
The plugin might not work with certain versions of git.  Users (thanks https://github.com/mortalapeman !) have reported situations in which gitlight status throws null pointer exceptions or displays wrong information, for instance on a git version 1.7.9.5.  The plugin has been tested on git >= 1.8, although You might still experience problems with different versions.

In case of seeing something similar to these: <br>
https://github.com/kuznicki-me/gitlight/issues/4 <br>
https://github.com/kuznicki-me/gitlight/issues/5

please check that Your git properly displays the output of git status --porcelain --branch.  The first line should include the branch name, like this:

 ## master
