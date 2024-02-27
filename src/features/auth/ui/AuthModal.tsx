import { memo } from 'react'
import { Modal } from 'shared/ui/modal'
import { AuthForm } from '..'

interface IAuthModalProps {
   onCloseModal: () => void
}

// FOR AUTO CALL FORM

export const AuthModal: React.FC<IAuthModalProps> = memo((props) => {
   const { onCloseModal } = props

   return (
      <Modal lazy width="480px" open={true} onClose={onCloseModal}>
         <AuthForm onClosedModal={onCloseModal} />
      </Modal>
   )
})
