import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { IoMdPerson } from 'react-icons/io'
import { MdOutlineMail, MdAlternateEmail } from 'react-icons/md'

import CardView from '../common/CardView'
import Input from '../common/Input'
import Button from '../common/Button'

interface FormData {
  name: string
  email: string
}

function GetInTouch() {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div>
      <div className="text-xl font-semibold">GetInTouch this is test page</div>
      <div className=" py-8">
        <CardView cardStyle={`p-5 flex w-full`}>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register}
                value={'name'}
                placeholder={'Name'}
                Icon={IoMdPerson}
              />
              <p>{errors.name?.message}</p>

              <Input
                register={register}
                value={'email'}
                placeholder={'Email'}
                Icon={MdAlternateEmail}
              />
              <p>{errors.email?.message}</p>

              <Button type="submit" name="SEND MESSAGE" />
            </form>
          </div>
        </CardView>
      </div>
    </div>
  )
}

export default GetInTouch
