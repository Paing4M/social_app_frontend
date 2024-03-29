import { Fragment } from 'react'
import PostCreateForm from '../form/PostCreateForm'
import { Dialog, Transition } from '@headlessui/react'

const PostMoal = ({
	isOpen,
	closeModal,
	setSuccess,
	editId,
	editPost,
	loading,
}) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={() => {}}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<Dialog.Title
									as='h2'
									className='text-xl font-semibold leading-6 text-black'
								>
									{editId ? 'Edit post' : 'Create post'}
								</Dialog.Title>
								<div className='mt-2'>
									<PostCreateForm
										loading={loading}
										editPost={editPost}
										setSuccess={setSuccess}
										closeModal={closeModal}
									/>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default PostMoal
