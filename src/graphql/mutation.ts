import { gql } from '@apollo/client'
const CREATE_NOTE = gql`
	mutation createNote($title : String  $des : String){
		createNote(title :$title des : $des){
			title
			des
			id
		}
	}
`
const UPDATE_NOTE = gql`
	mutation updateNote($id: String , $title : String , $des : String){
		updateNote(id : $id , title : $title , des : $des)
	}
`
const DELETE_NOTE = gql`
	mutation deleteNote($id : String){
		deleteNote(id : $id)
	}
`
export { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE }