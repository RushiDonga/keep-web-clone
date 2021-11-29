import CreateNote from "./CreateNote"
import Icons from "./Icons"
import '../css/home.css'
import NoteContainer from "./NoteContainer"
const Home = () => {
	document.title = "Keep Clone | Krish Kashiwala"
	return (
		<div className="lg:mr-14 mt-14 ">
			<Icons />
			<CreateNote />
			<NoteContainer />
		</div>
	)
}
export default Home
