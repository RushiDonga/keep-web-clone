import { gql } from '@apollo/client'
const NOTES = gql`
	query notes{
		notes{
		title
		id
		des
		}
	}
`
export { NOTES }