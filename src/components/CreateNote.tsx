import { useMutation } from '@apollo/client'
import React from 'react'
import '../css/createnote.css'
import { CREATE_NOTE } from '../graphql/mutation'
import { note } from '../interface'
const CreateNote: React.FC<{}> = () => {
	const [show, setShow] = React.useState<boolean>(false)
	const [title, setTitle] = React.useState<String>('')
	const [des, setDes] = React.useState<String>('')
	const auto_grow = () => {
		const element = document.querySelector('#des') as HTMLTextAreaElement
		element.style.height = "11em";
		element.style.height = (element.scrollHeight) + "px";
		// const butt = document.querySelector('.create-button') as HTMLButtonElement
		// butt.style.top = "7em";
		// butt.style.top += element.style.height
	}
	if (show) {
		// left code
	}
	const [createNote, { error: new_error, loading: new_loading }] = useMutation<note>(CREATE_NOTE)
	if (new_error || new_loading) console.log(new_error)
	const CreateNewNote = () => {
		createNote({
			variables: {
				title: title,
				des: des
			}
		})
		window.location.reload()
	}
	return (
		<div className="mt-5 w-full resize-none overflow-hidden p-2 relative flex flex-col ">
			<div className="flex items-center justify-center flex-col  rounded-lg relative">
				{
					show &&
					<input type="text" maxLength={35} className="w-11/12 lg:w-5/12 p-5 rounded-lg rounded-b-none outline-none  shadow-xl" placeholder="Title" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
				}
				<textarea onInput={auto_grow} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDes(e.target.value)} onClick={() => setShow(true)} className="w-11/12 lg:w-5/12 h-40 p-5 box-border z-0  shadow-xl rounded-lg rounded-t-none outline-none textArea" id="des" placeholder="Take a note.." cols={30} rows={10}>

				</textarea>
			</div>
			<div className="w-full h-5 mr-44 relative">
				<button className="w-10 py-1 rounded-full bottom-1 text-white font-bold text-2xl absolute right-10 lg:right-1/3 create-button" onClick={CreateNewNote}>

					+
				</button>
			</div>
		</div>
	)
}
export default CreateNote