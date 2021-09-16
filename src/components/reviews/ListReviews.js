const ListReviews = ({ reviews }) => {

  const reviewLis = reviews.map((review) => <li key={ review.id }>{ review.user.first_name[0] + review.user.last_name[0]} says: { review.content }</li>)
  return (
    <ul>
      { reviewLis }
    </ul>
  )
}

export default ListReviews
