const ListReviews = ({ reviews }) => {

  const reviewLis = reviews ? reviews.map((review) => <li key={ review.id }>{ review.username } says: { review.content }</li>) : null
  return (
    <ul>
      { reviewLis }
    </ul>
  )
}

export default ListReviews
