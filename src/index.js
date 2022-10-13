import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { Icon } from './components/icons/index'

export const ReactSelectGroup = (props) => {
  // click outside
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  // flag
  const [flag, setFlag] = useState(props.flags.length > 0 ? props.flags[0] : '')
  const changeFlag = (newFlag) => {
    setFlag(newFlag)
  }

  // label
  const [label, setLabel] = useState('')
  const changeLabel = (newLabel) => {
    setLabel(newLabel)
  }

  // text
  const [text, setText] = useState('')
  const changeText = (e) => {
    setText(e.target.value)
    props.onChange({
      flag: flag,
      label: label,
      text: e.target.value
    })
  }

  // icon name
  const [iconName, setIconName] = useState('arrow-down')
  useEffect(() => {
    setIconName(dropDown ? 'arrow-up' : 'arrow-down')
  })

  // drop down
  const [dropDown, setDropDown] = useState(false)
  const changeDropDown = () => {
    setDropDown(!dropDown)
  }

  // model
  const onChangeModel = (flag, label) => {
    props.onChange({
      flag: flag,
      label: label,
      text: text
    })
  }
  const listOptions = props.flags.map((item, index) => (
    <li
      key={index}
      className='max-w-full cursor-pointer hover:bg-gray-sg-200 p-2'
      onClick={() => {
        changeFlag(item)
        changeLabel(props.labels[index])
        setDropDown(false)
        onChangeModel(item, props.labels[index])
      }}
    >
      <div className='flex flex-row'>
        <img width={24} height={24} src={item} alt={props.labels[index]} />
        <div className='pl-2'>{props.labels[index]}</div>
      </div>
    </li>
  ))

  let list
  if (dropDown && props.flags.length > 0) {
    list = (
      <div className={`bg-gray-sg-100 border border-t-0 ${props.isError ? 'border-red-sg-100' : 'border-gray-sg-200'} rounded-b-md`}>
        <ul className='overflow-y-auto'>{listOptions}</ul>
      </div>
    )
  }

  let selected;
  if(props.flags.length > 0) {
    selected = (
      <div className='flex'>
        <img width={24} height={24} src={flag} alt={label} />
          <div className='flex items-center'>
            <Icon name={iconName} />
          </div>
      </div>
    )
  }

  return (
    <div ref={ref}>
      <div className='flex flex-row bottom-0 left-0 text-12px xxl:text-14px'>
        <div
          className={`bg-gray-sg-100 flex ${
            dropDown && props.flags.length > 0 ? 'rounded-tl' : 'rounded-l'
          } border ${
            props.isError ? 'border-red-sg-100' : 'border-gray-sg-200'
          } text-black-sg-100 leading-tight pl-2 pr-3 py-2 xxl:py-2 font-normal cursor-pointer`}
          onClick={changeDropDown}
        >
          {selected}
        </div>

        <div
          className={`w-full bg-white ${
            dropDown && props.flags.length > 0 ? 'rounded-tr' : 'rounded-r'
          } border-t border-r border-b ${
            props.isError ? 'border-red-sg-100' : 'border-gray-sg-200'
          } text-black-lp-300 leading-tight px-3 py-2 xxl:py-2 font-normal`}
        >
          <input
            type='text'
            placeholder={props.placeholder}
            value={text}
            onChange={changeText}
            className='w-full truncate self-center align-middle focus:outline-none'
          />
        </div>
      </div>
      {list}
    </div>
  )
}

ReactSelectGroup.defaultProps = {
  flags: [],
  labels: [],
  onChange: () => {},
  placeholder: 'Type here',
  isError: false
}

ReactSelectGroup.propTypes = {
  flags: PropTypes.array,
  labels: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.bool
}
