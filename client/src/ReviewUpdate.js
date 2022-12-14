import Update from "./pages/review/Update";

const ReviewUpdate = () => {
  return (
    <main className="bg-dark">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-light">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요 <br />
              수정 페이지
            </p>
          </div>
        </div>
      </section>
      <Update />
    </main>
  );
};

export default ReviewUpdate;
