import React from "react";
import {Link} from 'react-router';

import {getMessages} from '../services/messageService.js';

import MessageLink from './MessageLink.js';

export default class Inbox extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { messages: [] };
	}

	componentWillMount(){
		this.setState({messages: getMessages()});
	}

	render() {
		const styles = this.getStyles();
		const messages = this.state.messages.map( message => (
			<Link
				key={message.id}
				to={'/inbox/${message.id}'}
			>
			<MessageLink
				email={message.email}
				key={message.id}
				name={message.name}
			/>
			</Link>
		));

		return (
			<div style={ styles.wrapper }>
				<div style={ styles.messageLinkWrapper }>
					{messages}
				</div>
				<div style={ styles.activeMessageWrapper }>
					{this.props.children}
				</div>
			</div>
		);
	}

	getStyles() {
		return { /* */ }
	}
}
