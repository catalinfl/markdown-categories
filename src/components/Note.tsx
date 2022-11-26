import React from 'react'
import { Badge, Button, Col, Container, Row, Stack } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown';
import { childrenToReact } from 'react-markdown/lib/ast-to-react';
import { Link, useNavigate } from 'react-router-dom';
import { NoticeProps } from 'react-select';
import { useNote } from './NoteLayout'

type NoteProps = {
  onDelete: (id: string) => void
}


 export function Note ({onDelete}: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
  <>
  <Row className="align-items-center mb-4">
    <Col>
      <h1> {note.title} </h1>
      {note.tags.length > 0 && (
        <Stack gap={1} direction="horizontal" className="flex-wrap">
          {note.tags.map(tag => (
            <Badge className="text-truncate" key={tag.id}>
              {tag.label}
            </Badge>
          ))}
        </Stack>
      )}
     </Col>
     <Col xs="auto">
        <Stack gap={2} direction="horizontal">
          <Link to={`/${note.id}/edit`}>
            <Button variant="primary"> Create </Button>
          </Link>
            <Button onClick={() => { onDelete(note.id)
               navigate('/') }} variant="danger"> Delete </Button>
            <Link to={`/`}>
            <Button variant="outline-danger"> Back </Button>
            </Link>
        </Stack>
     </Col>
  </Row>
  <ReactMarkdown>{note.markdown}</ReactMarkdown>
  </>
  )
          }