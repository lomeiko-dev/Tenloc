import { FeedbackForm } from 'features/feedback-form'
import { useAuth } from 'shared/lib/hooks/useAuth'
import { Text, enumStyleText } from 'shared/ui/text'

const FeedbackPage = () => {
   const { data: auth } = useAuth()

   if (!auth?.user?.id) return null

   return (
      <div>
         <Text
            margin="60px 0 0 0"
            styleText={enumStyleText.SECONDARY_SUBTITLE}
            text="Запрос в тех поддержку"
         />
         <FeedbackForm userId={auth.user.id} margin="41px 0 102px 0" />
      </div>
   )
}

export default FeedbackPage
