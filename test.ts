import play from "./play-dl";

(async () => {
    const stream = await play.stream("https://www.youtube.com/watch?v=NJNp6DnAAIo");

    console.log(stream.type);
})();
