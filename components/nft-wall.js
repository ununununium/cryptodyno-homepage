import Logo from './logo'
import NextLink from 'next/link'
import { Box, useColorModeValue } from '@chakra-ui/react'

const IMAGE_SERVER_URL =
  'https://ipfs.moralis.io:2053/ipfs/QmUARwfUWtpbFo4HoXQqQwtVLdzikCLJp1kk3mfcEmY5dV/images/'

const getImageUrlById = id => {
  let paddedHex = (
    '0000000000000000000000000000000000000000000000000000000000000000' + id
  ).slice(-64)
  return IMAGE_SERVER_URL + paddedHex + '.png'
}

const Art = ({ id }) => {
  let imageUrl = getImageUrlById(id)
  const widthAndHeight = 60

  return (
    <img
      style={{
        width: widthAndHeight,
        height: widthAndHeight,
        borderRadius: 10,
        margin: 6
      }}
      src={imageUrl}
    />
  )
}
const NFTWall = props => {
  const ids = new Array(100).fill(1)

  return (
    <Box
      as="nav"
      w="100%"
      css={{
        height: '290px',
        overflow: 'auto',
        backdropFilter: 'blur(10px)'
      }}
      zIndex={1}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',

          flexWrap: 'wrap'
        }}
      >
        {ids.map((value, index) => {
          return <Art key={index} id={index + 1} />
        })}
      </div>
    </Box>
  )
}

export default NFTWall
