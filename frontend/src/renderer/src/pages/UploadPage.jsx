import Versions from '../components/Versions'
import UploadButton from '../components/UploadButton'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

function UploadPage() {
  return (
    <>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Card sx={{ p: 4, minWidth: 320 }}>
          <UploadButton />
        </Card>
      </Box>
    </>
  )
}

export default UploadPage;
