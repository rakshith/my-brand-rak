import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { IoMdPerson } from 'react-icons/io'
import { MdOutlineMail, MdAlternateEmail } from 'react-icons/md'

import CardView from '../common/CardView'
import Input from '../common/Input'
import Button from '../common/Button'
import TextArea from '../common/TextArea'

interface FormData {
  name: string
  email: string
  message: string
}

function GetInTouch() {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
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
    <>
      <div className="text-xl font-semibold">Get in touch</div>
      <div className="py-8">
        <CardView cardStyle={`px-5 pb-5 `}>
          <div className="flex w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full">
              <div className="pb-10">
                <Input
                  register={register}
                  value={'name'}
                  placeholder={'Name'}
                  Icon={IoMdPerson}
                />
                <p>{errors.name?.message}</p>
              </div>

              <div className="pb-10">
                <Input
                  register={register}
                  value={'email'}
                  placeholder={'Email'}
                  Icon={MdAlternateEmail}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="pb-10">
                <TextArea
                  register={register}
                  value={'message'}
                  placeholder={'Message'}
                  Icon={MdOutlineMail}
                />
                <p>{errors.message?.message}</p>
              </div>
              <Button type="submit" name="SEND MESSAGE" />
            </form>
          </div>
        </CardView>
      </div>
    </>
  )
}

export default GetInTouch
