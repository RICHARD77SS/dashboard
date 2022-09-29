import { AiFillTags, AiOutlineMenu, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "../Button";
import Container from "../Container";

import { Flex1, Notes, TopNotes, NotesContent } from './styles';

const ScheduleMyAnnotations = () => {
  return (
    <Container>
      <Flex1>
        <Notes>
          <TopNotes>
            <Button>
              <AiOutlineMenu />
            </Button>
            <Button>
              <AiOutlinePlus />
            </Button>
            <Button>
              <AiOutlineSearch />
            </Button>
            <Button>
              <AiFillTags />
            </Button>
            <Button>
              <BsTrash />
            </Button>
          </TopNotes>
          <NotesContent>

          </NotesContent>
        </Notes>
      </Flex1>
    </Container>
  )
}

export default ScheduleMyAnnotations;