import { useQuery } from "@apollo/client"
import { NOTES } from '../graphql/query'
import { ANotes } from "../interface"
import Note from "./Note"
const NoteContainer: React.FC = () => {
	const { data: note_data, error: note_error, loading: note_loading } = useQuery<ANotes>(NOTES)
	if (!note_data || note_error || note_loading) console.log(note_error)
	console.log(note_data)
	return (
		<div className="grid lg:grid-cols-4 grid-cols-1  lg:mt-10  lg:ml-20 ml-0    gap-4 content-center p-3">
			{
				note_data?.notes?.map(item => (
					<Note id={item.id} title={item.title} des={item.des} />
				))
			}
		</div>
	)
}
export default NoteContainer