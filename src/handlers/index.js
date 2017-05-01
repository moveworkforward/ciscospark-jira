import issues from './issues'
import watch from './watch'
import webhooks from './webhooks'

const displayHelp = (bot, message) => bot.reply(message, `
  Here are some of the things I can do:
  - **list open tickets** — list open issues assigned to you or someone else. For \
     example, to list your own issues, try \`list my open issues\`. To list issues \
     for someone else try \`list open issues for George\`.
  - **create tickets** — I can create a new task, story, or bug for you. You \
     must specify the project, type of ticket and summary. For example: \
     \`create new TEST task "Add more features"\`.
  - **ticket status** — I can find the status of an existing ticket. You can \
     ask, for example, \`what is the status of TEST-12?\`.
  - **comment on a ticket** - To comment on an issue, you can tell me which ticket \
     and your comment: \`comment on TEST-12 "These features are important"\`
  - **help** — display this message

  I'll also post notifications to ${process.env.JIRA_WEBHOOK_ROOM} \
  when issues are created, assigned, or their status changes.
`)

export const handleJoin = (bot, message) =>
  bot.reply(message, 'This trusty JIRA bot is here to help.')

export default {
  displayHelp,
  handleJoin,
  issues,
  watch,
  webhooks
}
