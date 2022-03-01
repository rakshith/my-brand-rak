import React from 'react'
import { AuthorLanguages } from '../graphql/generated/schema'
import RoundProgressBar from './RoundProgressBar'

interface LangugesProps {
  languages: Array<AuthorLanguages>
}

function Languages({ languages }: LangugesProps) {
  return (
    <>
      <div className="mt-4 text-sm font-semibold">Languages</div>

      <div className="mt-5 flex flex-row justify-evenly">
        {languages.map((language: AuthorLanguages) => (
          <div key={language.id}>
            <RoundProgressBar
              value={language.fluency || 0}
              title={language.name || ''}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Languages
