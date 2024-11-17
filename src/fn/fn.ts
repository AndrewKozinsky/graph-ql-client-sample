import {useMutation, useQuery} from '@apollo/client'
import React, {useCallback, useEffect, useState} from 'react'
import {GET_BOOKS} from '../userQueries.ts'

export function useGetBooks() {
	const [books, setBooks] = useState([])

	const {data, loading, error, refetch} = useQuery(GET_BOOKS)

	useEffect(function () {
		if (!loading && !error) {
			console.log(data.books)
			setBooks(data.books)
		}
	}, [loading, data])

	return {
		books,
		// reFetchUsers: refetch
	}
}

/*export function useGetUser() {
	const [user, setUser] = useState([])

	const {data, loading, error, refetch} =
		useQuery(GET_ONE_USER, {variables: {id: "1"}})

	useEffect(function () {
		if (!loading) {
			setUser(data.getAllUsers)
		}
	}, [data])

	return user
}*/

/*
export function useGetCreateNewUser() {
	const [createUser] = useMutation(CREATE_USER)

	return useCallback(function (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		username: string,
		age: number) {
		e.preventDefault()
		createUser({
			variables: {
				input: {
					username, age
				}
			}
		})
	}, [])
}*/
