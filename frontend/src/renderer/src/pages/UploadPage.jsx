import Versions from '../components/Versions'
import UploadButton from '../components/UploadButton'
import { Card, Title } from '@mantine/core';

function UploadPage() {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
        <Card
          shadow="md"
          radius="md"
          padding="xl"
          withBorder
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[7], // dark background
            borderColor: theme.colors.dark[5],     // dark border
          })}
        >
          <UploadButton />
        </Card>
      </div>
    </>
  )
}

export default UploadPage;
