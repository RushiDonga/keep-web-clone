import { useMutation } from '@apollo/client'
import '../css/note.css'
import { UPDATE_NOTE } from '../graphql/mutation'
import { note } from '../interface'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModalUpdate from './ModalUpdate';
const Note: React.FC<{ title: string | undefined, des: string | undefined, id: string | undefined }> = ({ title, des, id }) => {
	const [updateNote, { data: update_data, error: update_error, loading: update_loading }] = useMutation<note>(UPDATE_NOTE)
	if (!update_data || update_error || update_loading) console.log(update_error)
	console.log(update_data)

	const updateData = () => {
		updateNote({
			variables: {
				id: id,
				title: title,
				des: des
			}
		})
	}
	return (
		<div className=" bg-white p-3 rounded-md note-main">
			<div className="flex flex-row items-start justify-between  ">
				<h2 className="font-bold">{title}</h2>
				<Popup trigger={
					<svg onClick={updateData} className=" cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" /></svg>
				} position="right center" modal
					nested>
					{(close: () => void) => (
						<div>
							<ModalUpdate close={close} tit={title} id={id} de={des} />
						</div>
					)}
				</Popup>

			</div>
			<h4 className="mt-5">{des}</h4>
		</div>
	)
}
export default Note;