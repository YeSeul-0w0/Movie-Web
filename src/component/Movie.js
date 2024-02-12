import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    Text,
    Image
} from "@chakra-ui/react";

function Movie({ id, coverImg, title, summary, genres}) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={coverImg}
                alt={title}
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text py='2'>
                        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/movie/${id}`}> See More </Link>
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}


Movie.protoTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;