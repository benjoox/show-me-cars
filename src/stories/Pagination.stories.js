import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'
import '../custom.scss'

import Pagination from '../components/Pagination'

export default {
    component: Pagination,
    title: 'Pagination',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
}

const currentPage = 5
const pagesCount = 10

const actionsData = {
    first: action('first'),
    previous: action('previous'),
    next: action('next'),
    last: action('last'),
}

export const Default = () => (
    <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        first={actionsData.first}
        previous={actionsData.previous}
        next={actionsData.next}
        last={actionsData.last}
    />
)
