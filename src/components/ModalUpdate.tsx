import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_NOTE, UPDATE_NOTE } from '../graphql/mutation'
import '../css/updatemodal.css'
import { note } from '../interface'
const ModalUpdate: React.FC<{ close: any, tit: string | undefined, de: string | undefined, id: string | undefined }> = ({ close, tit, de, id }) => {
	const [show, setShow] = React.useState<boolean>(false)
	const [title, setTitle] = React.useState<string | undefined>(tit)
	const [des, setDes] = React.useState<string | undefined>(de)
	const auto_grow = () => {
		const element = document.querySelector('#des') as HTMLTextAreaElement
		element.style.height = "11em";
		element.style.height = (element.scrollHeight) + "px";
	}
	const [deleteNote] = useMutation<note>(DELETE_NOTE)
	const [updateNote] = useMutation<note>(UPDATE_NOTE)
	console.log(id)
	const updater = () => {
		updateNote({
			variables: {
				id: id,
				title: title,
				des: des
			}
		})
		close()
		window.location.reload()

	}
	const DeleteNote = () => {
		if (window.confirm('Are you sure you want to delete note ?'))
			deleteNote({
				variables: {
					id: id
				}
			})
		close()
		window.location.reload()
	}
	return (
		<div className=" resize-none overflow-hidden modal-main rounded-lg  ">

			<div className="flex items-center justify-center flex-col  rounded-lg relative">
				{
					show &&
					<input type="text" className="w-11/12 p-5 rounded-lg rounded-b-none outline-none  shadow-xl" defaultValue={tit} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
				}
				<textarea onInput={auto_grow} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDes(e.target.value)} defaultValue={de} onClick={() => setShow(true)} className="w-11/12 h-40 p-5 box-border  shadow-xl rounded-lg rounded-t-none outline-none" id="des" placeholder="Take a note.." cols={30} rows={10}>

				</textarea>
				<div className="flex flex-row items-center justify-between w-full mt-10">
					<svg className="fill-current text-gray-500 hover:text-black transition-shadow duration-700 cursor-pointer ease-in-out w-12 h-12 p-3 rounded-sm" onClick={DeleteNote} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
					<button className="bg-gray-200 p-3 rounded-lg cursor-pointer" onClick={updater}>Done</button>
				</div>
			</div>
		</div >
	)
}
export default ModalUpdate