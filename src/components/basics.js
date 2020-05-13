import React from 'react'

export const Basics = ({
  name,
  label,
  img,
  email,
  phone,
  website,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{label}</p>
      <p>{img}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </>
  )
}
