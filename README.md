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
