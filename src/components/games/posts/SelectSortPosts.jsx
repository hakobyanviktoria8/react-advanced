import React from 'react'

export const SelectSortPosts = ({sortVal, onChange}) => {
  return (
    <select value={sortVal} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">Select sorting</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
    </select>
  )
}
